import { ProjectType } from "../projects";
import CloseButton from "./CloseButton";
import ModalContent from "./ModalContent";
import { Modal, ModalWrapper } from "./ProjectModal.styles";

interface ProjectModalProps extends ProjectType {
  onClose: () => void;
}

const ProjectModal = ({ onClose, ...project }: ProjectModalProps) => {
  return (
    <ModalWrapper>
      <Modal>
        <h2>{project.title}</h2>
        <ModalContent project={project} />
        <CloseButton onClose={onClose} />
      </Modal>
    </ModalWrapper>
  );
};

export default ProjectModal;
