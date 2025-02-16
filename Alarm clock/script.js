let alarmTime = null;
        
        function updateClock() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
            
            if (alarmTime && `${hours}:${minutes}` === alarmTime) {
                alert("Time's up! Alarm ringing!");
                
               alarmTime = null;
            }
        }
        
        function setAlarm() {
            alarmTime = document.getElementById('alarmTime').value;
            if (alarmTime) {
                alert(`Alarm set for ${alarmTime}`);
            }
        }
        
        setInterval(updateClock, 1000);
        updateClock();