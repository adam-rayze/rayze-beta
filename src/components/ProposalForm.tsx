import React from 'react';
import { MemberProposalForm } from './MemberProposalForm';
import { InvestorProposalForm } from './InvestorProposalForm';

interface ProposalFormProps {
  projectName: string;
  isOpen: boolean;
  onClose: () => void;
  isMemberView?: boolean;
  milestones?: Array<{ title: string; fundingGoal: string; }>;
}

export function ProposalForm({ projectName, isOpen, onClose, isMemberView = false, milestones = [] }: ProposalFormProps) {
  if (!isOpen) return null;

  if (isMemberView) {
    return (
      <MemberProposalForm
        projectName={projectName}
        milestones={milestones}
        onClose={onClose}
      />
    );
  }

  return (
    <InvestorProposalForm
      projectName={projectName}
      onClose={onClose}
    />
  );
}