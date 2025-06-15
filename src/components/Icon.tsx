
import React from "react";
import { Phone, Mail, Linkedin, Github } from "lucide-react";

// Only allowed icons (per docs/config): "github", "Phone", "Mail", "linkedin"
const allowedIcons = {
  github: Github,
  Phone,
  Mail,
  linkedin: Linkedin,
};

interface IconProps {
  name: "github" | "Phone" | "Mail" | "linkedin";
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 20, className }) => {
  const LucideIcon = allowedIcons[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} className={className} />;
};

export default Icon;

