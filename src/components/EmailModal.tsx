import { useRef } from "react"

export default function EmailDialog() {
    const dialog = useRef<any>(null);

    function handleKeyPressDialog(event: any) {
        if (event.key === 'Escape') {
            console.log('foi');
            // handleCloseDialog();
        } 
    }

    return (
        <dialog  onKeyDown={handleKeyPressDialog} ref={dialog}></dialog>
    )
}