import React from "react";

export const CATEGORIES = {
  EDUCATION: "Education",
  INCLUSIVITY: "Inclusivity",
  STEM: "STEM",
  ENVIRONMENT: "Environment",
  HUMAN_RIGHTS: "Human Rights",
};

export const CATEGORY_ICONS = {
  [CATEGORIES.EDUCATION]: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1447e7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
    </svg>
  ),
  [CATEGORIES.INCLUSIVITY]: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1447e7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="3" />
      <path d="M5.5 21c0-4.5 2.9-8 6.5-8s6.5 3.5 6.5 8" />
      <path d="M17 10h2m-1-1v2" />
    </svg>
  ),
  [CATEGORIES.STEM]: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1447e7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6v6l4 8H5l4-8V3z" />
      <path d="M9 3h6" />
      <circle cx="13" cy="15" r="1" fill="#1447e7" />
      <circle cx="10" cy="13" r="0.5" fill="#1447e7" />
    </svg>
  ),
  [CATEGORIES.ENVIRONMENT]: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1447e7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c4-4 8-7.5 8-12A8 8 0 0 0 4 10c0 4.5 4 8 8 12z" />
      <path d="M12 12c-2 0-4 1-4 3" />
      <path d="M12 8v6" />
    </svg>
  ),
  [CATEGORIES.HUMAN_RIGHTS]: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1447e7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
};

export function CategoryIcon({ category }) {
  return CATEGORY_ICONS[category] || null;
}
