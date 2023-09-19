import ContactHero from "@/components/contact/ContactHero";
import ContactInputs from "@/components/contact/ContactInputs";
import MyEmailPhoneNumber from "@/components/contact/MyEmailPhoneNumber";

const ContactPage = () => {
  return (
    <main>
      <ContactHero />
      <div className="bg-white900 dark:bg-black200">
        <div className="flex flex-col md:flex-row-reverse md:justify-evenly lg:py-8 xl:gap-[4.69rem] 2xl:mx-auto 2xl:max-w-[90rem]">
          <ContactInputs />
          <MyEmailPhoneNumber />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
