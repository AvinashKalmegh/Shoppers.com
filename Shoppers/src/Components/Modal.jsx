import {
    Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
} from "@chakra-ui/react"


export default function ModalS({text}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <div style={{marginTop:"30px"}} >
        <Button fontSize={18} onClick={onOpen}>{text}</Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Congrats !!!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Order Placed Successfully !!!
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  }