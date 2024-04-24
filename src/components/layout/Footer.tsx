import Link from "next/link";
import { contactsData, socialMedia } from "@/assets/staticData";

export default function Footer() {
    return (
        <footer className="container mx-auto py-8 px-5 grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d186.3239299023008!2d41.63470668526743!3d41.65179058592418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40678755e5e925a5%3A0xbc27f3026de1d8f6!2sGEORGIAN%20AUTO%20IMPORT!5e0!3m2!1sen!2sge!4v1713955943278!5m2!1sen!2sge"
                    width="100%"
                    height="450"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="max-md:row-start-1 flex flex-col justify-between">
                <div className="flex flex-col gap-7">
                    <h3 className="font-oswald text-5xl font-semibold">
                        Contacts
                    </h3>
                    <p className="text font-medium text-black/60">
                        Our contacts are available to you 24/7. Reach out with
                        any questions or inquiries
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    {contactsData.map((item) => (
                        <Link
                            href={item.href}
                            target="_blank"
                            className="flex items-center font-medium text-lg gap-2 opacity-50 hover:opacity-100 duration-300"
                        >
                            {item.icon}
                            {item.text}
                        </Link>
                    ))}
                </div>
                <div className="flex gap-5">
                    {socialMedia.map((item) => (
                        <Link
                            href={item.href}
                            className="opacity-60 p-1 rounded-lg hover:opacity-100 duration-300 hover:bg-black/10"
                            target="_blank"
                        >
                            {item.icon}
                        </Link>
                    ))}
                </div>
                <p className="text-black/60">
                    Copyright &copy; 2024 Georgian Auto Import
                </p>
            </div>
        </footer>
    );
}
