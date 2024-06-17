import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "@/components/ui/carousel";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  carouselImages: string[];
  githubLink: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  technologies,
  carouselImages,
  githubLink,
  demoLink,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Card className="cursor-pointer" isPressable onClick={onOpen}>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={title}
            className="w-full object-cover h-[140px]"
            src={image}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{title}</b>
          <p className="text-default-500">{description}</p>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          <>
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>
              <p>{description}</p>
              <Carousel orientation="horizontal">
                <CarouselMainContainer className="h-60">
                  {carouselImages.map((img, index) => (
                    <SliderMainItem
                      key={index}
                      className="border border-muted flex items-center justify-center h-52 rounded-md"
                    >
                      <Image
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </SliderMainItem>
                  ))}
                </CarouselMainContainer>
                <CarouselThumbsContainer className="h-16">
                  {carouselImages.map((img, index) => (
                    <SliderThumbItem
                      key={index}
                      index={index}
                      className="rounded-md bg-transparent"
                    >
                      <span className="border border-muted flex items-center justify-center h-full w-full rounded-md cursor-pointer bg-background">
                        <Image
                          src={img}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </span>
                    </SliderThumbItem>
                  ))}
                </CarouselThumbsContainer>
              </Carousel>
              <div className="flex space-x-2 mt-4">
                {technologies.map((tech, index) => (
                  <Image
                    key={index}
                    src={tech}
                    alt={tech}
                    className="w-8 h-8"
                  />
                ))}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose}>
                Close
              </Button>
              <Button as="a" href={githubLink} target="_blank" color="primary">
                View GitHub
              </Button>
              <Button as="a" href={demoLink} target="_blank" color="primary">
                View Demo
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProjectCard;
