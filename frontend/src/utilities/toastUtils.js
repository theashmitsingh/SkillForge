import toast from 'react-hot-toast';
import { useState } from 'react';

// Success toast
export const successToast = (message) => {
  manageToast(message, 'success');
};

// Error toast
export const errorToast = (message) => {
  manageToast(message, 'error');
};

// Manage toasts
let toastCounter = 0;
const MAX_TOASTS = 3;

const manageToast = (message, type) => {
  // Only allow up to 3 active toasts at a time
  if (toastCounter >= MAX_TOASTS) {
    toast.dismiss(); // Dismiss the oldest toast
    toastCounter--; // Decrease active toast counter
  }

  // Increment the counter
  toastCounter++;

  // Display the new toast
  if (type === 'success') {
    toast.success(message, {
      duration: 2000,
      position: 'top-right',
      style: {
        background: '#1e1e1e', // Black background
        color: '#56ae57', // Green text for success
        borderRadius: '8px',
        padding: '12px',
        border: '1px solid #56ae57', // Subtle green border
        fontWeight: 'bold',
      },
      icon: '✔️', // Custom icon for success
      onClose: () => toastCounter--, // Decrease counter when toast closes
    });
  } else if (type === 'error') {
    toast.error(message, {
      duration: 2000,
      position: 'top-right',
      style: {
        background: '#1e1e1e', // Black background
        color: '#F32013', // Red text for error
        borderRadius: '8px',
        padding: '12px',
        border: '1px solid #F32013', // Subtle red border
        fontWeight: 'bold',
      },
      icon: '❌', // Custom icon for error
      onClose: () => toastCounter--, // Decrease counter when toast closes
    });
  }
};
