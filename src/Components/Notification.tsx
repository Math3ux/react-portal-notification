
import ReactDOM from 'react-dom'

export const Notification = ({ message, onClose }: { message: string, onClose: () => void }) => {
    return ReactDOM.createPortal(
        <div className="notification">
            <span>🔔 {message}</span>
            <button onClick={onClose} aria-label="Fechar">×</button>
        </div>,
        document.getElementById('notification-root')!
    )
}
