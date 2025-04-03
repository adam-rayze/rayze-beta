import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface WaitlistPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistPopup({ isOpen, onClose }: WaitlistPopupProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      function submitHandler(event) {
        event.preventDefault();
        var container = event.target.parentNode;
        var form = container.querySelector(".newsletter-form");
        var formInput = container.querySelector(".newsletter-form-input");
        var success = container.querySelector(".newsletter-success");
        var errorContainer = container.querySelector(".newsletter-error");
        var errorMessage = container.querySelector(".newsletter-error-message");
        var backButton = container.querySelector(".newsletter-back-button");
        var submitButton = container.querySelector(".newsletter-form-button");
        var loadingButton = container.querySelector(".newsletter-loading-button");
        
        if (!formInput.value) {
          errorContainer.style.display = "flex";
          errorMessage.innerText = "Please enter an email address.";
          return;
        }

        const rateLimit = () => {
          errorContainer.style.display = "flex";
          errorMessage.innerText = "Too many signups, please try again in a little while";
          submitButton.style.display = "none";
          formInput.style.display = "none";
          backButton.style.display = "block";
        }
      
        var time = new Date();
        var timestamp = time.valueOf();
        var previousTimestamp = localStorage.getItem("loops-form-timestamp");
      
        if (previousTimestamp && Number(previousTimestamp) + 60000 > timestamp) {
          rateLimit();
          return;
        }
        localStorage.setItem("loops-form-timestamp", timestamp);
      
        submitButton.style.display = "none";
        loadingButton.style.display = "flex";
      
        var formBody = "userGroup=&mailingLists=&email=" 
          + encodeURIComponent(formInput.value)
          ;
      
        fetch(event.target.action, {
          method: "POST",
          body: formBody,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
          .then((res) => [res.ok, res.json(), res])
          .then(([ok, dataPromise, res]) => {
            if (ok) {
              success.style.display = "flex";
              form.reset();
              formInput.style.display = "none";
              submitButton.style.display = "none";
              loadingButton.style.display = "none";
              backButton.style.display = "none";
              
              // Auto close the popup after 2 seconds on success
              setTimeout(() => {
                const closeEvent = new CustomEvent('closeWaitlistPopup');
                document.dispatchEvent(closeEvent);
              }, 2000);
            } else {
              dataPromise.then(data => {
                errorContainer.style.display = "flex";
                errorMessage.innerText = data.message
                  ? data.message
                  : res.statusText;
                submitButton.style.display = "flex";
                loadingButton.style.display = "none";
              });
            }
          })
          .catch(error => {
            if (error.message === "Failed to fetch") {
              rateLimit();
              return;
            }
            errorContainer.style.display = "flex";
            if (error.message) errorMessage.innerText = error.message;
            localStorage.setItem("loops-form-timestamp", '');
            submitButton.style.display = "flex";
            loadingButton.style.display = "none";
          });
      }
      
      function resetFormHandler(event) {
        var container = event.target.parentNode;
        var formInput = container.querySelector(".newsletter-form-input");
        var success = container.querySelector(".newsletter-success");
        var errorContainer = container.querySelector(".newsletter-error");
        var errorMessage = container.querySelector(".newsletter-error-message");
        var backButton = container.querySelector(".newsletter-back-button");
        var submitButton = container.querySelector(".newsletter-form-button");
      
        success.style.display = "none";
        errorContainer.style.display = "none";
        errorMessage.innerText = "Oops! Something went wrong, please try again";
        backButton.style.display = "none";
        formInput.style.display = "flex";
        submitButton.style.display = "flex";
      }
      
      var formContainers = document.getElementsByClassName("newsletter-form-container");
      
      for (var i = 0; i < formContainers.length; i++) {
        var formContainer = formContainers[i]
        var handlersAdded = formContainer.classList.contains('newsletter-handlers-added')
        if (handlersAdded) continue;
        formContainer
          .querySelector(".newsletter-form")
          .addEventListener("submit", submitHandler);
        formContainer
          .querySelector(".newsletter-back-button")
          .addEventListener("click", resetFormHandler);
        formContainer.classList.add("newsletter-handlers-added");
      }
    `;
    document.body.appendChild(script);

    // Add event listener for custom close event
    const closeHandler = () => onClose();
    document.addEventListener('closeWaitlistPopup', closeHandler);

    return () => {
      document.body.removeChild(script);
      document.removeEventListener('closeWaitlistPopup', closeHandler);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-rayze-card rounded-xl p-8 max-w-md w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h2>
          <p className="text-gray-400">
            Get updates while we're under construction and be among the first to experience Rayze.
          </p>
        </div>

        <div className="newsletter-form-container">
          <form 
            className="newsletter-form" 
            action="https://app.loops.so/api/newsletter-form/cm1tm6wkj0173dwimz8p1rb1l" 
            method="POST"
            target="_self"
          >
            <input
              className="newsletter-form-input input-base mb-4"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button 
              type="submit" 
              className="newsletter-form-button btn-primary w-full"
            >
              Join Waitlist
            </button>
            <button 
              type="button" 
              className="newsletter-loading-button btn-primary w-full hidden"
            >
              Please wait...
            </button>
          </form>
          
          <div className="newsletter-success hidden items-center justify-center mt-4">
            <p className="newsletter-success-message text-rayze-accent">
              You're on the waitlist! Stay tuned for updates.
            </p>
          </div>
          
          <div className="newsletter-error hidden items-center justify-center mt-4">
            <p className="newsletter-error-message text-rayze-error">
              Oops! Something went wrong, please try again
            </p>
          </div>
          
          <button 
            className="newsletter-back-button text-gray-400 hover:text-gray-300 mt-4 hidden"
            type="button"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}