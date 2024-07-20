import TestimonialCardRework from './TestimonialCardRework';

const testimonials = [{}];

{/* <TestimonialCardRework
  message="Une formation très prospère et Mr Paul est un excellent formateur pour vous faire entrer dans ce petit monde de secourisme… c'est fut un grand plaisir d'être former par lui et en plus de cela, sa technique d'approche m'a permis a ce que la matière reste dans ma tête comme si je le réviser chaque jours. Aussi une belle équipe, je vous adore. a bientôt."
  name='Dophil Kiese Vema'
  company='Collège Boréale'
  rating={5}
/>; */}

export default function TestimonialGrid() {
  return (
    <>
      <div class='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div class='grid gap-4'>
          <TestimonialCardRework
            message="Je suis tellement reconnaissante d'avoir eu l'opportunité de suivre cette formation. J'ai eu l'occasion d'appliquer ces enseignements ce matin avec ma fille qui a eu une coupure profonde à sa lèvre inférieure. Elle saignait beaucoup et j'ai d'abord refroidi la blessure avec de l'eau du robinet avant d'appliquer un pansement. Si je n'avais pas suivie cette formation, je n'aurais pas su comment il fallait procéder. Je vous dis encore merci."
            name='Adèle Nadège Mbelle Nkelle'
            company='Centre Francophone du Grand Toronto'
            rating={5}
          />
          <TestimonialCardRework
            message='Un grand Merciii A Paul pour la journée de formation sa joie de vivre et son professionnalisme on fait de cette journée de formation était un pur bonheur!! Merci pour tout!'
            name='Vicky Gs'
            company='LPCR'
            rating={5}
          />
          <TestimonialCardRework
            message="Merci pour de formation, c'était une agréable journée d'apprentissage. Bravo."
            name='Kaoutar Elansari'
            company='Collége Boréal'
            rating={5}
          />
          <TestimonialCardRework
            message="M. Paul est un très bon enseignant qui sais allier cours et détente. Grâce à ses explications pratiques, j'ai bien compris le cours."
            name='Bécanty Raïssa Kouassi'
            company='Garderie les lucioles Jean-Paul II'
            rating={5}
          />
          <TestimonialCardRework
            message="Paul, de loin, de mon bureau, j'ai découvert le beau travail. Comme je vous l'ai signalé à la fin de la journée, nombreux gestes de sauvetage que vous avez fait décourvrir et pratiquer par les participantes de Emploi-CPPS devraient être connus par tous. Ils devraient être connus par les parents de bébés et d'enfants; ils devraient être connus par les enfants au sein des familles, les collègues dans les lieux professionnels, les promeneurs sur les routes ou dans les parcs, ... ils devraient etre connus par chacun et chacune. Ainsi, des vies seraient sauvées, nombreuses vies seraient secourues, etc. Je me ferai personnellement la mission d'être votre ambassadrisse autant que faire se peut. Félicitations, Paul."
            name='Albertine Chokoté NT'
            company='La Maison'
            rating={5}
          />
          <TestimonialCardRework
            message="Je suis vraiment contente d'avoir pris ce cours. Le prof est extraordinaire, il explique bien et il est très gentil, et il a beaucoup d'humour. C'était un moment très fun. Beaucoup de rire, on apprend vite et comprend bien. Merci Monsieur Paul pour cette opportunité."
            name='Deborah Shania Estime'
            company='Les Lucioles Inc'
            rating={5}
          />
          <TestimonialCardRework
            message="Cher Paul, J'ai adoré chaque instant de cette session, car j'ai non seulement appris énormément de choses, mais j'ai également passé un moment agréable, riche en informations et empreint d'humour. Votre manière d'enseigner est tout simplement exceptionnelle. Vous avez su rendre l'apprentissage du secourisme passionnant et captivant. Je recommande la séance :) Salutations"
            name='Imen Bouchnek'
            company='CGFT'
            rating={5}
          />
          <TestimonialCardRework
            message="Paul est vraiment exceptionnel. Sa capacité à capter l'attention de son public lors de la formation est admirable. Le temps est passé sans que l'on s'en rende compte, ce qui trouve son talent pédagogique. Nous avons beaucoup appris tout en nous amusant."
            name='Noufissa Jelila'
            company='Centre Francophone du Grand Toronto'
            rating={5}
          />
          <TestimonialCardRework
            message='C’était un plaisir pour moi de faire la formation avec Paul. Paul, c’est un bon animateur, il a une façon exceptionnelle de transmettre la matière. Il a beaucoup contribué à notre apprentissage. Encore une fois merci et bon succès.'
            name='Maguy Momba'
            company='Preschool petit bateau'
            rating={5}
          />
          <TestimonialCardRework
            message='Paul est un instructeur très passionné et compétent qui a rendu le cours de base de réanimation amusant et engageant. Bravo Paul et merci beaucoup encore au plaisir de te voir la prochaine fois continue le beau travail que tu fais.'
            name='Aicha Elmi Amare'
            company='La Farondole'
            rating={5}
          />
        </div>
        <div class='grid gap-4'>
          <TestimonialCardRework
            message='Ce fut un plaisir de faire le cours avec Paul. Il sait de quoi il parle il a sa façon de te faire intégrer dans le cours et dans le groupe. Bravo Paul et merci encore au plaisir de te voir la prochaine fois continue le beau travail que tu fais . Thé right person at the right place.'
            name='Marie Lacaze'
            company='Petit Bateau'
            rating={5}
          />
          <TestimonialCardRework
            message="Paul est un instructeur genial, il sait comment garder l'audience en alerte malgre la condensation du cours. L'apprentissage a ete tres agreable et tres enrichissant, malheureusement, il faut attendre 3 ans pour un autre cours 😀. merci!!"
            name='Laurence Makanda'
            company='Centre Francophone du Grand Toronto'
            rating={5}
          />
          <TestimonialCardRework
            message='Vraiment, Mr Paul vous méritez plus je vous remercie sincèrement pour la formation qui a lieu le 22 octobre, vous êtes un bon formateur avec ce travail exceptionnel que vous continuer à nous donner et Dieu vous garde encore plus longtemps.'
            name='Solange Musangilayi ilunga'
            company='LPCR'
            rating={5}
          />
          <TestimonialCardRework
            message='J’apprécie énormément Paul, c’est un instructeur qualifié, et amusant. C’était un excellent moment d’apprentissage. Merci!!'
            name='Plamedie Tshinate'
            company='Red cross'
            rating={5}
          />
          <TestimonialCardRework
            message='Thank Mr Paul, i enjoyed the training, you made it more interesting. You are a professional trainer, a good speaker. You made me listen clearly to every word you were explaining. I liked your sense of humour to make your audience feel confortable. It was great meeting you. All the best. Bonne continuation.'
            name='Rachida Zouhir'
            company='College Boreal'
            rating={5}
          />
          <TestimonialCardRework
            message="Paul Martin Demers étais excellent. J'ai trop aimée la façon que il a enseignée le cours, à cause de lui, je me sens plus comfortable avec TOUT le contenant. Merci beaucoup!"
            name='Olivia Mahfouz'
            company='AFESEO on y va Halton'
            rating={5}
          />
          <TestimonialCardRework
            message="Paul est un formateur hors pair! Ce fût la formation en secourisme la plus captivante que j'ai réalisé jusqu'ici et la plus complète, l'humour et l'énergie que Paul y met rend ce cours mémorable, merci!"
            name='Heloise Boissiere'
            company='Centre Francophone du Grand Toronto'
            rating={5}
          />
          <TestimonialCardRework
            message='Un immense merci pour cette formation de qualité. M. Paul est un enseignant passionné et très compétent.'
            name='Rose Ndong'
            company='Centre Francophone du Grand Toronto'
            rating={5}
          />
          <TestimonialCardRework
            message='Mr Paul, un grand merci vous avez été à l’hauteur ,c est pourquoi nous devons revenir après 3 ans pour apprendre d’avantage.'
            name='Odile Mafunga'
            company='Lpcr'
            rating={5}
          />
          <TestimonialCardRework
            message="Je tien à remercier Paul Martin Demers pour son professionnalisme et de la qualité de la formation RCR. Son approche pédagogique et la clarté de son explication ainsi que sa grande connaissance du sujet ont grandement contribué à l'intérêt et à la valeur de cette formation. Je suis convaincue que les compétences acquis lors de la formation me seront bénéfiques dans le future pour aider les gens en cas d'accident. Je me réjouis d'avoir eu l'opportunité de participer à cette formation qui été vraiment enrichissante. Merci encor une fois Paule pour votre temps et pour votre façon d'enseigner qui été vraiment agréable que on avait pas senti le temps passé ."
            name='Souhila Ouari'
            company='Collège Boréale'
            rating={5}
          />
        </div>
        <div class='grid gap-4'>
          <TestimonialCardRework
            message='Paul is a very passionate and knowledgeable instructor that made the Basic Life Support Course fun and engaging. As a nursing student, I particularly enjoyed how he incorporated quick thinking scenario-based situations. This has allowed me to expand my critical thinking skills and feel more confident in my CPR skills. Overall, I highly recommend Paul as an instructor to anyone who is seeking to get certified in CPR and first-aid!'
            name='Jasmine Kim'
            company='Centennial College'
            rating={5}
          />
          <TestimonialCardRework
            message='Paul est un excellent dans son domaine. Très professionnel et comique. Une meilleure façon d’apprentissage.'
            name='Fatoumata Barry'
            company='LPCR'
            rating={5}
          />
          <TestimonialCardRework
            message="Paul est un instructeur certifié bilingue. Son attitude est toujours positive pendant tout le déroulement de la formation. Il est bien organisé et met en place des travaux pratiques et des divers exercices. Il transmet son enthousiasme ce que je trouve essentiel pour maintenir la motivation. Il rend les sessions de formation amusantes et créatives pour nous encourager à participer. Il se rend disponible à tous. Meilleur instructeur jusqu'à présent!"
            name='Dr Shawn W. Gmora'
            company='Centre Francophone du Grand Toronto'
            rating={5}
          />
          <TestimonialCardRework
            message='Merci, à paul pour cet belle journée d’apprentissage, enrichissante et pour la patience et sa joie de vivre. Suis trop contente d’avoir fait cet belle rencontre, et être formé par une personne aussi professionnel et gentils. Merci encore pour tout.'
            name='Nureen Esmail Kamango'
            company='Collège Boréal'
            rating={5}
          />
          <TestimonialCardRework
            message="Je suis satisfaite de cette formation, elle a été bien donnée, j'ai ajouté une connaissance de plus pour venir en aide. Je vous remercier infinement promettant d'envoyer d'autres personnes afin de beneficier de même formation. Merci"
            name='Naomie Kamwanya Korongo'
            company='Les Generales'
            rating={5}
          />
          <TestimonialCardRework
            message='J’ai été gracié de suivre ce fabuleux cours surtout accompagné d’un éducateur formidable. Merci pour tout.'
            name='Severine Kouami'
            company='Etudiante'
            rating={5}
          />
          <TestimonialCardRework
            message="Merci infiniment pour l'ambiance magnifique et surtout tes talents comme formateur, tu as rendu la formation agréable. je ne pense pas que j'oublierais tout ce que tu nous a appris."
            name='Imen kacem'
            company='Centre Francophone du Grand Toronto'
            rating={5}
          />
          <TestimonialCardRework
            message="Paul est vraiment un formateur passionnée et sait exactement comment transmettre sa passion tout en rassurant les personnes pas toujours à l'aise dans ces situations. Merci à toi pour ta bonne humeur et ton professionnalisme."
            name='Justine Lejeune'
            company='Centre Francophone du Grand Toronto'
            rating={5}
          />
          <TestimonialCardRework
            message='Un grand merci à Paul, il a cette facilité d’engager et de motiver le groupe. Son professionnalisme a fait que les heures de formation soient un pur bonheur.'
            name='Patricia Betumankoy'
            company='Garderie La Farandole de Toronto'
            rating={5}
          />
          <TestimonialCardRework
            message="Merci a Paul pour cette belle expérience et a la qualité de la formation, j'ai passé un très bon moment d'apprentissage dans la joie et la bonne humeur."
            name='Nadia Kenniche'
            company='Collège Boréal'
            rating={5}
          />
        </div>
      </div>
    </>
  );
}
