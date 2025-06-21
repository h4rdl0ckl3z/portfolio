import Image from 'next/image';

export const SectionAbout = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-xl mb-8">
                    I'm a **developer** and **reverse engineer** passionate about exploring how software works under the hood and creating efficient, innovative solutions. I enjoy working on diverse projects including web development, automation and reverse engineering challenges.
                </p>
                {/* <Image src="https://avatars.githubusercontent.com/u/54482333?s=400&u=c430a54568014a47938386f3aa960d7cb97f9125&v=4" width={200} height={200} alt="A detailed portrait of the developer" className="mx-auto rounded-full" /> */}
                <Image src="https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/463428306_2443436085999428_8517229882710112264_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHGKEU_74jKHZvFgypWrvTVbvw_I_jz7cNu_D8j-PPtw2wpNZ1CHsArxNiFP3anCX83ZNyQmiLwrOsz5rYVcK4W&_nc_ohc=Gsbfk6DC2CQQ7kNvwE73X3U&_nc_oc=AdnzZDSisoR1l6PwmsUUeuXrlHEKkSB3ZmvxsBNcsbVw9-LxI0159JqqfG5pn2cOiyoxGlYK9hwGTpy6KW7fw4gY&_nc_zt=23&_nc_ht=scontent.fbkk8-4.fna&_nc_gid=M0WvXBgTt14rSXRKPeKxGg&oh=00_AfPTIroIAgknFrDb2QNNY6S1TRFDamB5Wr3cfJ4jLi_X5A&oe=685A948C" width={200} height={200} alt="A detailed portrait of the developer" className="mx-auto rounded-full" />
            </div>
        </section>
    );
}