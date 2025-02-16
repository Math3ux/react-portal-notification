import './App.css'
import { useState } from 'react';
import { Notification } from './Components/Notification';

const App = () => {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div>
      <button onClick={() => setShowNotification(true)}>
        Mostrar Notificação
      </button>

      {showNotification && (
        <Notification
          message="Notificação exibida com sucesso!"
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};


export default App
