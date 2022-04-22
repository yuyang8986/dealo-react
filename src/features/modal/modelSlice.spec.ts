import { acceptEnum } from './modalModel';
import modalReducer, {
    ModalState,
    openModal,
    closeModal
} from './modalSlice';

describe('modal reducer', () =>{
    const closeState: ModalState = {
        title: "",
        accept: undefined,
        isOpen: false,
        acceptButtonText: "",
    };

    const openState: ModalState = {
        title: "Test Open",
        accept: acceptEnum.logout,
        isOpen: true,
        acceptButtonText: "Accept",
    }

    it('should handle initial state', () => {
        expect(modalReducer(undefined, {type: 'unknown'})).toEqual({
            title: "",
            accept: undefined,
            isOpen: false,
            acceptButtonText: "",
        })
    });

    it('should handle open modal', () => {
        expect(modalReducer(closeState, openModal({title: "Test Open", acceptButtonText: "Accept", accept: acceptEnum.logout}))).toEqual(openState)
    });
    
    it('should handle close modal', () => {
        expect(modalReducer(openState, closeModal())).toEqual(closeState)
    });
})