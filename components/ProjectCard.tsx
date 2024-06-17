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
  shortDescription: string;
  fullDescription: string;
  keyPoints: string[];
  technologies: string[];
  carouselImages: string[];
  githubLink: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  shortDescription,
  fullDescription,
  keyPoints,
  technologies,
  carouselImages,
  githubLink,
  demoLink,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Card
        className="cursor-pointer w-full h-[380px]"
        isPressable
        onClick={onOpen}
      >
        <CardBody
          className="p-0 
        "
        >
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={title}
            className="w-full object-cover h-full"
            src={image}
          />
        </CardBody>
        <CardFooter className="text-small justify-between flex flex-col py-4">
          <h1 className="text-bold text-2xl">{title}</h1>
          <p className="text-default-500">{shortDescription}</p>
          <div className="flex flex-row pb-2 lg:pb-4">
            {technologies.map((tech, index) => (
              <Image
                key={index}
                src={tech}
                alt={tech}
                className="w-8 h-8  mx-1"
              />
            ))}
          </div>
        </CardFooter>
      </Card>

      <Modal
        isOpen={isOpen}
        onOpenChange={onClose}
        className="mx-auto max-w-[1024px] p-1 sm:p-2 md:p-4 lg:p-8 rounded-lg"
        scrollBehavior="inside"
      >
        <ModalContent>
          <>
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>
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
              <h2 className="text-bold text-md mt-4">Technologies:</h2>
              <div className="flex space-x-2 ">
                {technologies.map((tech, index) => (
                  <Image
                    key={index}
                    src={tech}
                    alt={tech}
                    className="w-8 h-8"
                  />
                ))}
              </div>
              <p>{fullDescription}</p>
              <h3 className="mt-4 mb-2 font-bold">Key Features:</h3>
              <ul className="list-disc ml-5">
                {keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
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
