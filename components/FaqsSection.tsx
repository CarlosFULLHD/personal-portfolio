import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqsSection = () => {
  return (
    <section className="md:w-4/6 lg:w-4/6">
      <Accordion
        type="single"
        collapsible
        className="p-4 bg-white text-black rounded-lg my-8 mx-2"
      >
        <AccordionItem
          value="item-1"
          className="text-lg text-bold lg:text-xl xl:text-2xl"
        >
          <AccordionTrigger>¿Qué es una plantilla de Notion?</AccordionTrigger>
          <AccordionContent className="text-medium lg:text-lg xl:text-xl">
            Notion es una aplicación todo-en-uno que combina notas, tareas,
            wikis y bases de datos para proporcionar un espacio de trabajo
            altamente personalizable.
            <br />
            <br />
            Las plantillas de Notion, como la mía, son configuraciones
            preestablecidas que puedes importar a tu propio espacio de Notion
            para empezar rápidamente a usarla.
            <br />
            <br />
            Tambien Notion te deja escribir y personalizar COMPLETAMENTE la
            plantilla para que hagas apuntes, escribas tu mismo y hagas tus
            planes personalizados.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="text-lg text-bold lg:text-xl xl:text-2xl"
        >
          <AccordionTrigger>¿Tengo que pagar por Notion?</AccordionTrigger>
          <AccordionContent className="text-medium lg:text-lg xl:text-xl">
            No hay ningún costo extra, solo necesitas una cuenta gratuita de
            Notion para esta plantilla(Notion deja 5MB gratuitos de subida de
            archivos como imagenes, PDF a cada cuenta).
            <br />
            <br />
            PD: Si ya usaste notion, podrias crearte una nueva cuenta ya que es
            probable que pese 3-4MB por el material.
            <br />
            Recuerda que el espacio limite aplica para subida de archivos, no
            para el texto que vayas a escribir, así que no te preocupes por
            ello.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="text-lg text-bold lg:text-xl xl:text-2xl"
        >
          <AccordionTrigger>
            ¿Cómo accedo a la plantilla después de comprarla?
          </AccordionTrigger>
          <AccordionContent className="text-medium lg:text-lg xl:text-xl">
            Recibirás un enlace directo y pasos sencillos para duplicar la
            plantilla en tu espacio de Notion, todo esto también será enviado a
            tu correo electrónico(el que ingreses).
            <br />
            También el link al grupo de Discord con mas información del grupo.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="text-lg text-bold lg:text-xl xl:text-2xl"
        >
          <AccordionTrigger>
            ¿Cuánto tiempo necesito dedicar al curso para ver resultados?
          </AccordionTrigger>
          <AccordionContent className="text-medium lg:text-lg xl:text-xl">
            El tiempo puede variar según el individuo, algunos pueden tener
            mejores resultados según su compromiso y si aplican las enseñanzas.
            <br />
            <br />
            Puedes ir a tu propio ritmo, puedes unirte a las reuniones de
            Discord en cualquier momento y tener acceso a las grabaciónes.
            <br />
            <br />
            Simplifiqué al maximo las enseñanzas de muchos autores con tal de
            que sea facil de seguir, leer y poner en práctica, incluso si tienes
            poco tiempo, porque se trata de mejorar tú mismo a tu ritmo, cada
            uno tiene una vida diferente y eso lo entiendo.
            <br />
            <br />Y si no crees que es para tí recuerda que puedes pedir un
            reembolso hasta 30 dias despues de la compra sin problemas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="text-lg text-bold lg:text-xl xl:text-2xl"
        >
          <AccordionTrigger>
            ¿Es segura mi información de pago?
          </AccordionTrigger>
          <AccordionContent className="text-medium lg:text-lg xl:text-xl">
            Si, los pagos se manejan a través de sistemas seguros y no
            almacenamos ninguna información. Con la infraestructura de Lemon
            squeezy, puedes estar seguro de que tu transacción es privada y
            segura.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-6"
          className="text-lg text-bold lg:text-xl xl:text-2xl"
        >
          <AccordionTrigger>
            ¿Cómo funciona el proceso de reembolso y cuáles son los requisitos?
          </AccordionTrigger>
          <AccordionContent className="text-medium lg:text-lg xl:text-xl">
            Si sientes que el curso no ha cumplido con tus expectativas,
            ofrecemos una política de reembolso clara para asegurar tu
            tranquilidad.
            <br />
            <br />
            <span className="font-bold">
              Para solicitar un reembolso, por favor sigue estos pasos:
            </span>
            <br />
            Debes enviar un correo electrónico a{" "}
            <span className="font-bold">carlitos@carlitosnina.com</span> antes
            de que finalice el día 30 tras tu compra, hasta la medianoche (hora
            local). Asegúrate de incluir tu nombre, dirección de correo
            electrónico usada para la compra, y el número de pedido.
            <br />
            <br />
            <span className="font-bold">Proceso de Reembolso:</span>
            <br />
            Una vez recibamos tu solicitud, revisaremos los detalles y nos
            pondremos en contacto contigo para confirmar el proceso. Nos
            esforzamos por realizar los reembolsos lo más rápido posible, pero
            por favor, permite hasta 7 días hábiles para completar la
            transacción.
            <br />
            <span className="font-bold">Si te pasas del día 30</span>, te
            invitamos a contactarnos igualmente. Aunque nuestra política es
            estricta, entendemos que pueden surgir situaciones excepcionales y
            estamos dispuestos a escuchar tu caso.
            <br />
            <span className="font-bold">¿Qué Pasa Después?</span>
            <br />
            Recibirás un correo electrónico confirmando la cancelación de tu
            acceso al curso y la emisión del reembolso. Queremos asegurarnos de
            que tu experiencia con Libertad Digital sea positiva, incluso si
            decides que el curso no es adecuado para ti en este momento.
            <br />
            <span className="font-bold">¿Tienes más preguntas?</span>
            <br />
            Si tienes cualquier otra duda o necesitas asistencia adicional, no
            dudes en contactarnos a través de carlitos@carlitosnina.com. Estamos
            aquí para ayudarte.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-7"
          className="text-lg text-bold lg:text-xl xl:text-2xl"
        >
          <AccordionTrigger>
          ¿Cómo puedo actualizar mi plantilla gratuita a la versión completa después de comprar el curso?
          </AccordionTrigger>
          <AccordionContent className="text-medium lg:text-lg xl:text-xl">
          <span className="font-bold">¡Actualizarse es un proceso sencillo y rápido!</span>
          <br /> Al adquirir la versión completa de "Libertad Digital", obtendrás acceso completo a todas las lecciones y
           plantillas especiales, asegurando que puedas continuar tu progreso sin interrupciones.
           <br /><br />
            Simplemente sigue estos pasos para integrar tu trabajo previo en la versión completa:
<br />

1. <span className="font-bold">Compra la versión completa de "Libertad Digital":</span> para desbloquear todas las lecciones y plantillas.
<br />
2. <span className="font-bold">Accede a tu nueva plantilla completa:</span> Una vez realizada la compra, recibirás un enlace para acceder a la plantilla completa en Notion.
<br />
3. <span className="font-bold"> Transfiere tu progreso:</span> Abre tu plantilla gratuita y la completa en pestañas diferentes. Copia y pega fácilmente el contenido que hayas creado o modificado desde la plantilla gratuita a la completa.
<br />
¡Continúa tu desarrollo! Con todo tu trabajo previo transferido, puedes seguir avanzando en tu camino hacia la superación personal y la desintoxicación digital.
No te preocupes, tu esfuerzo y progreso en la versión gratuita no se perderán. 
        </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
