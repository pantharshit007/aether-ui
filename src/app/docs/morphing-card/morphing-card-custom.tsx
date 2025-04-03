"use client";
import { MorphingCard } from "@/content/morphing-card";
import { MailPlus } from "lucide-react";
import React from "react";

const MorphingCardCustom = () => {
  return (
    <MorphingCard
      customId="email-service"
      variant="positive"
      icon={MailPlus}
      iconClassname="text-emerald-500"
      title="Add Email Service"
      description="Connect a new email service to your application for sending notifications."
      confirmButtonText="Add Service"
      dialogTitle="Add Email Service"
      dialogDescription="This will guide you through connecting a new email provider. Your current services will remain active."
      dialogConfirmText="Continue Setup"
    />
  );
};

export default MorphingCardCustom;
