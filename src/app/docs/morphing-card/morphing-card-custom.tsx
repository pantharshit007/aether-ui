"use client";
import { MorphingCard } from "@/content/morphing-card";
import { Users } from "lucide-react";
import React from "react";

const MorphingCardCustom = () => {
  return (
    <MorphingCard
      customId="create-team"
      variant="positive"
      icon={Users}
      iconClassname="fill-emerald-500"
      title="Create New Team"
      description="Set up a new team in your organization with customizable permissions and roles."
      confirmButtonText="Create Team"
      dialogTitle="Create Team"
      dialogDescription="You're about to create a new team. Team members can be added after creation. Would you like to proceed?"
      dialogConfirmText="Yes, Create Team"
    />
  );
};

export default MorphingCardCustom;
