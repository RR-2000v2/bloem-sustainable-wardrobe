
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does bloem work?",
      answer: "bloem combines a digital platform with physical exchange racks. You can list your clothing items on our app, set them for sale or sharing, and arrange exchanges through our secure racks placed in convenient locations."
    },
    {
      question: "Where are the physical racks located?",
      answer: "Our racks are currently available in select urban areas, with new locations being added regularly. The app will show you the nearest racks to your location. We prioritize safe, high-traffic areas like malls, coffee shops, and partner retail locations."
    },
    {
      question: "How much does it cost to use bloem?",
      answer: "Basic listing and browsing is free. For sales, we take a small 10% commission. Premium features like enhanced listings and priority rack access are available with our monthly subscription."
    },
    {
      question: "How do I know the clothes will be in good condition?",
      answer: "All users must follow our quality guidelines when listing items. Our rating system helps identify reliable users, and we have a satisfaction guarantee for any items that don't match their description."
    },
    {
      question: "What happens if someone doesn't pick up their item?",
      answer: "Items are held in our racks for 3 days. If not collected, they'll be returned to the original owner or, if specified in your preferences, donated to our partner charities."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, we use industry-standard encryption and never store your full payment details. All transactions are processed through our secure payment partners."
    },
  ];

  return (
    <section className="py-20 bg-bloem-ivory">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
          <p className="body-md text-gray-600">
            Got questions about how bloem works? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                  <span className="text-left text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
