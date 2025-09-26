import { useState, useEffect } from 'react';

interface DriverStatus {
  isActive: boolean;
  currentCount: number;
  statusText: string;
}

export const useDriverStatus = () => {
  const [status, setStatus] = useState<DriverStatus>({
    isActive: false,
    currentCount: 0,
    statusText: ''
  });

  const checkTime = () => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 21;
  };

  const updateStatus = () => {
    const isActive = checkTime();
    let currentCount = 0;

    if (isActive) {
      // Random count between 1-4 with weights
      const weights = [0.15, 0.25, 0.35, 0.25]; // 1, 2, 3, 4 drivers
      const random = Math.random();
      let sum = 0;
      
      for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
        if (random < sum) {
          currentCount = i + 1;
          break;
        }
      }
    }

    setStatus({
      isActive,
      currentCount,
      statusText: `${currentCount}`
    });
  };

  useEffect(() => {
    // Initial update
    updateStatus();

    // Update every 8-12 minutes (random between 480000-720000 ms)
    const updateInterval = setInterval(() => {
      updateStatus();
    }, Math.random() * 240000 + 480000);

    // Check time every minute (in case it crosses 6:00 or 21:00)
    const timeCheckInterval = setInterval(() => {
      const wasActive = status.isActive;
      const isActive = checkTime();
      
      // Only update display if active status changed
      if (wasActive !== isActive) {
        updateStatus();
      }
    }, 60000);

    return () => {
      clearInterval(updateInterval);
      clearInterval(timeCheckInterval);
    };
  }, []);

  return status;
};