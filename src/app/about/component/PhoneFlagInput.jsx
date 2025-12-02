"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // if not in globals
// flag-icon-css imported via globals.css (recommended)

export default function PhoneFlagInput({ value, onChange, className = "" }) {
  const [phone, setPhone] = useState(value || "");

  return (
    <div className={`w-full ${className}`}>
      <PhoneInput
        country={"us"}                 // default selected country
        value={phone}
        onChange={(val, country) => {
          setPhone(val);
          onChange?.(val, country);
        }}
        enableSearch={true}            // open dropdown searchable
        disableCountryCode={false}     // keep dial code if you need it in value
        disableDropdown={false}
        countryCodeEditable={false}
        // styling hooks (containerClass + inputClass)
        containerClass="react-tel-input w-full"
        inputClass="w-full px-3 py-5 bg-black rounded-md placeholder-gray-300"
        buttonClass="bg-black rounded-l-md px-3 py-2 border border-gray-700"
        dropdownClass="country-list custom-country-list " // optional
        // optional: limit to preferred countries on top
        specialLabel={" "} // avoid extra label when formatting
      />
    </div>
  );
}
