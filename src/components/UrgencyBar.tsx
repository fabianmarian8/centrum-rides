import { useState, useEffect } from 'react';

const UrgencyBar = () => {
  const [timeLeft, setTimeLeft] = useState(24);

  useEffect(() => {
    const updateUrgency = () => {
      const hours = new Date().getHours();
      const remaining = 24 - hours;
      setTimeLeft(remaining);
    };

    updateUrgency();
    const interval = setInterval(updateUrgency, 3600000); // Update every hour

    return () => clearInterval(interval);
  }, []);

  const isUrgent = timeLeft < 6;

  return (
    <div 
      className={`
        fixed top-0 left-0 right-0 z-50 p-4 text-center font-bold text-sm
        ${isUrgent 
          ? 'bg-red-600 urgent-flash' 
          : 'bg-gradient-to-r from-primary via-secondary to-primary urgent-flash'
        }
        shadow-lg
      `}
      style={{
        backgroundSize: '200% 200%',
      }}
    >
      {isUrgent ? (
        <>🚨 URGENTNÉ: Len {timeLeft} hodín zostáva na vojenskú zľavu! 🚨</>
      ) : (
        <>🇪🇸 LIMITOVANÝ ČAS: 20% ZĽAVA pre španielsky vojenský personál - Rezervujte dnes! 🇪🇸</>
      )}
    </div>
  );
};

export default UrgencyBar;