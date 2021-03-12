import React, { useEffect, useCallback } from 'react'
import { IoClose } from 'react-icons/io5'
import { useHistory } from 'react-router-dom'
import { useExternalFocus } from '../../hooks'
import Container from './styles'

const Modal = ({
  showModal,
  onClose,
  showCloseBtn = true,
  modalTitle,
  backdropHide = true,
  escapeOnClose = true,
  className,
  children,
}) => {
  const history = useHistory()
  const { containerRef } = useExternalFocus({
    onClose,
    showModal,
    escapeOnClose,
  })

  useEffect(() => {
    const body = document.body
    if (showModal && !body.classList.contains('lock-scroll')) {
      body.classList.add('lock-scroll')
    } else if (!showModal && body.classList.contains('lock-scroll')) {
      body.classList.remove('lock-scroll')
    }
  }, [showModal])

  const handleClose = useCallback(
    (e) => {
      e.stopPropagation()
      if (typeof onClose === 'function') {
        onClose()
      } else {
        history.goBack()
      }
    },
    [onClose, history],
  )

  return showModal ? (
    <Container ref={containerRef} onClick={handleClose}>
      <div
        className={`modal--container ${className ? className : ''}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {modalTitle && (
          <h2 className="modal--title u--typo__title">{modalTitle}</h2>
        )}
        {showCloseBtn && (
          <button className="close-btn" onClick={handleClose}>
            <IoClose />
          </button>
        )}

        {children}
      </div>
    </Container>
  ) : null
}

export default Modal
