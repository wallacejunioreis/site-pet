import Image from "next/image";
import about1img from '../../../public/about-1.png'
import about2img from '../../../public/about-2.png'
import { Check } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";




export function About(){
    return(
        <section className="bg-[#FDF6ec] py-16">
            <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                
            <div className="relative ">
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                    <Image
                    src={about1img}
                    alt="Foto do cachorro"
                    fill
                    quality={100}
                    className="object-cover hover:scale-110 duration-300"
                    priority
                    />
                </div>
                <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg">
                    <Image
                    src={about2img}
                    alt="Foto do cachorro"
                    fill
                    quality={100}
                    priority
                    />
                </div>
            </div>
            <div className="space-y-6">
                <h2 className="text-4xl font-bold">
                    SOBRE
                </h2>

                <p>
                Aqui, acreditamos que cada pet merece carinho, cuidado e produtos de qualidade. Nosso compromisso é oferecer tudo o que seu companheiro de quatro patas precisa para viver feliz e saudável!
                </p>

                <ul className="space-y-4 ">
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500"/>
                        Aberto desde 2006
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500"/>
                        Aberto desde 2006
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500"/>
                        Temos veterinários.
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500"/>
                        Qualidade é nossa prioridade
                    </li>
                </ul>

                <a href="#"
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                    Contato via Whatsapp
                    <WhatsappLogo className="w-5 h-5 text-white"/>
                </a>

            </div>
            </div>
        </section>
    )
}