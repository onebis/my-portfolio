import {
  Button,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react'
import { WorkItemTop } from '@/app/_libs/type'

export function WorkContentModal({
  item,
  isOpen,
  onOpenChange,
}: {
  item: WorkItemTop
  isOpen: boolean
  onOpenChange: () => void
}) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='4xl' backdrop='blur' className='p-10'>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex items-center gap-2 text-xl'>
              {item.title}
              <Chip size={'sm'} variant='faded'>
                {item.term}
              </Chip>
            </ModalHeader>
            <ModalBody>
              {item.detail.split('\n').map((line, index) => (
                <p key={index} className='text-lg'>
                  {line}
                </p>
              ))}
              <ul className='mt-10 text-small'>
                <li className='flex gap-3'>
                  <p>規模：</p>
                  <p>{item.scale}</p>
                </li>
                <li className='flex gap-3'>
                  <p>ポジション：</p>
                  <p>{item.position}</p>
                </li>
                <li className='flex gap-3'>
                  <p>Stack:</p>
                  <p>{item.stack}</p>
                </li>
              </ul>
            </ModalBody>
            <ModalFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
