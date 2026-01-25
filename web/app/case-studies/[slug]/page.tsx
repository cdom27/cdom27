import { studies } from "@/app/_lib/utils/case-studies";
import { notFound } from "next/navigation";

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = studies.find((s) => s.project?.slug === slug);

  if (!study || !study.project) notFound();

  return (
    <>
      <div className="xl:max-w-300 2xl:max-w-400 xl:mx-auto pb-24">
        {/* Mobile: single column, Desktop (lg+): two columns with 40/60 split */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Text content - 40% on desktop, sticky positioned */}
          <aside className="w-full lg:w-2/5 lg:sticky lg:top-6 lg:self-start bg-blue-200 p-6 min-h-96 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            eos in ducimus, velit excepturi mollitia quibusdam fuga doloremque,
            nam aliquam nostrum dolorum quia similique iure quas laboriosam
            aperiam! Vitae, quos! Necessitatibus eum, natus non sequi recusandae
            tempore possimus quo impedit vero nulla neque sint maiores,
            consectetur, modi qui corporis dolore beatae cumque! Pariatur
            consectetur explicabo omnis, voluptates eos nemo corporis. Ipsam
            blanditiis architecto asperiores recusandae, libero ea repellat
            accusantium veritatis sapiente atque voluptas accusamus, aperiam
            ullam. Nobis fugit laboriosam dolore. Aperiam fugit molestiae magnam
            assumenda! Doloremque facere temporibus hic illo. Unde totam, quas
            dignissimos facere voluptatem quis modi ea obcaecati accusantium?
            Est fuga labore beatae quibusdam voluptatem consequuntur qui modi
            omnis veniam quia blanditiis soluta, reprehenderit quo, totam
            temporibus illum. Corporis et, autem porro ea repellendus quia
            blanditiis numquam neque, dolore atque animi at nulla molestias!
            Rerum dicta eaque qui eum ut sed quos totam cumque quas, doloribus
            officiis aliquid? Repellat quos sit iste adipisci totam harum
            incidunt ullam cumque in doloribus! Cupiditate, repudiandae ut
            ipsam, sunt sapiente labore nihil, quo voluptatum aliquid non
            molestiae porro facilis atque impedit laborum? Id dignissimos magni
            laborum voluptas maxime delectus eius repudiandae sit labore, vel,
            eveniet impedit quis omnis ullam praesentium tempore earum in?
            Possimus laborum alias, nobis fugiat fugit recusandae provident.
            Fugiat! Reiciendis cum commodi consectetur molestias, corporis
            praesentium nulla impedit, ab laborum amet cupiditate! Quos, nostrum
            in labore perferendis tempora repudiandae inventore quo aspernatur
            quas cum laboriosam commodi architecto odio qui. Voluptatum, nihil
            hic voluptates fugit corporis consequuntur sed. Maiores amet natus
            itaque dolorem eaque ipsum nisi expedita. Voluptatem, ratione quam
            omnis recusandae beatae voluptatibus. Veritatis dicta inventore
            earum eos architecto. Laboriosam voluptatem numquam praesentium.
            Ipsum repellat veniam, labore tempora nisi sequi quaerat quo
            inventore doloremque porro repellendus excepturi vitae iste
            molestiae dolorum illum deserunt nesciunt quasi mollitia ducimus id
            voluptate.
          </aside>

          {/* Image gallery - 60% on desktop, scrolls naturally */}
          <div className="w-full lg:w-3/5 bg-green-200 p-6 min-h-96">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            nostrum, autem odit asperiores modi ad. Earum animi dolore veritatis
            laborum voluptate, necessitatibus corporis molestiae! Ad omnis
            veritatis hic exercitationem unde! Obcaecati, repudiandae sed.
            Pariatur in molestiae autem natus illum inventore enim, reiciendis
            quidem reprehenderit deleniti aspernatur fugiat placeat amet beatae
            eveniet fuga facilis? Mollitia debitis sapiente quidem ratione
            corrupti ea! Voluptatibus atque corrupti suscipit quod! Deleniti
            voluptate ipsa nobis quia dolor, quasi libero nisi repudiandae quam.
            Ab consequatur perspiciatis quis in quasi, saepe, dolorem totam
            voluptas ratione illum maxime tenetur. Pariatur, earum quaerat
            accusantium repellat quisquam exercitationem consectetur dolore
            corporis voluptas, nostrum recusandae ducimus ex hic asperiores
            maiores. Similique iusto labore facilis, amet neque excepturi?
            Consectetur vel impedit sapiente necessitatibus? Dolorem tempore
            iste impedit illo, officia laudantium quibusdam nihil earum rerum ab
            maxime porro quos tenetur amet accusamus in recusandae modi harum
            laboriosam, ex repudiandae veniam? Cum amet voluptates laborum!
            Consectetur, laudantium ea! Omnis debitis soluta sequi quam error
            tempore accusantium aliquam cum corporis vitae dolorem, dignissimos
            quas veritatis eum libero aut minus. Deserunt cupiditate expedita
            obcaecati sequi, vitae eligendi. Accusantium voluptates nisi modi?
            Expedita ipsam officia ducimus, atque iure doloremque quod ut sunt
            distinctio cupiditate! Optio quibusdam, esse cupiditate deserunt et,
            repellat eum perspiciatis sequi accusamus modi inventore! Ex?
            Impedit similique, accusamus officiis velit aspernatur obcaecati
            neque hic placeat magnam voluptas maiores, quaerat, quo iusto
            repellat voluptatem illum sint totam explicabo ipsam consequatur.
            Eius error dolorem dignissimos perspiciatis tempore. Magnam pariatur
            quidem voluptatibus. Alias ducimus odio voluptas ea dicta nesciunt
            maxime blanditiis deleniti laborum eveniet voluptatibus impedit
            ipsam suscipit reprehenderit necessitatibus commodi, reiciendis
            earum facere atque in non natus? Deleniti officia dolor cumque
            reiciendis labore repudiandae ipsum, dolore perferendis mollitia
            vitae voluptate doloremque recusandae incidunt, nulla ea et eveniet
            ut explicabo fuga consectetur! Eum deleniti aperiam ex qui iusto?
            Blanditiis repellat omnis assumenda quis dolore, aspernatur
            quibusdam, praesentium molestias alias explicabo fuga fugit itaque
            voluptas minima error, fugiat cupiditate eveniet! Exercitationem,
            odio! Quos aut velit maxime tenetur ut ex. Quas placeat perspiciatis
            cumque, dolor magnam odit quidem voluptates vitae. Distinctio velit
            incidunt eligendi hic. Tenetur dolore magni odio corrupti ea
            delectus repudiandae ex? Dolores, non. Quo soluta ullam dignissimos.
            Placeat deserunt earum dolor architecto fuga recusandae culpa esse,
            similique doloremque obcaecati, eos accusantium voluptatem alias
            soluta illo quidem est excepturi neque amet in. Excepturi
            repellendus error laborum corrupti animi. Nulla quia ea accusamus
            enim quae tempora sint ipsum eos exercitationem dolore, qui autem
            repellendus placeat, maxime vero suscipit expedita odio deleniti
            tenetur nostrum odit veniam dicta ipsa sit? Est! Quia quibusdam
            dicta dolorem architecto consequatur nostrum tempora magnam non
            culpa voluptatibus consequuntur quidem, a, veniam ad minima, dolor
            harum. Voluptatibus tenetur vero commodi veritatis! Dolor
            perspiciatis reiciendis praesentium impedit! Dolorum quisquam
            maiores assumenda nesciunt reiciendis voluptatibus amet, itaque
            voluptates rem mollitia ullam! Deserunt inventore iure beatae minus
            eaque voluptates similique consequatur quia quidem, est asperiores
            ullam? Deserunt, saepe vel! Quibusdam, asperiores deserunt repellat
            dolore dolorum culpa sequi unde totam omnis aspernatur officiis
            expedita delectus fuga quisquam in porro dignissimos vero magnam
            rerum quidem numquam adipisci. Possimus reprehenderit laboriosam
            rerum. Et repudiandae aperiam, eligendi, corporis, maiores natus
            soluta voluptatum deserunt incidunt vero enim sed! Quae accusantium
            dolores minus nemo eaque, eligendi natus tempore necessitatibus iste
            facere amet dolorem quisquam animi? Non atque nemo fugiat nam dicta
            accusamus sit necessitatibus exercitationem dolorem at, incidunt
            facere. Nisi saepe distinctio dolorum. Vero qui blanditiis possimus
            beatae quam assumenda minima amet repellat illo non! Omnis,
            accusamus fugiat! Aliquid totam laudantium optio dolor quam,
            molestias eaque reprehenderit assumenda deleniti reiciendis ducimus
            voluptate doloremque unde eos, tenetur rem porro omnis. Ducimus
            officiis vel repellat facere corrupti! Veritatis amet veniam fugiat
            eum laboriosam dignissimos ad! Illo aut sequi facere? Dolorum eum
            tempore maiores? Inventore, dolorem? Porro velit delectus aut
            labore, voluptatem pariatur cupiditate beatae dicta illum molestias?
            Cupiditate ipsam veniam voluptatum quis consequatur amet incidunt
            repellat eos iure, facere magni minima, ea esse aliquam dicta
            repudiandae ab repellendus deserunt impedit adipisci illo fugit
            autem totam perferendis! Provident? Sunt, aspernatur. Temporibus
            iusto alias ipsa, tempora minus sequi quis hic non error. Optio quis
            distinctio illo quo, hic soluta. Magnam ab quaerat et nesciunt
            perspiciatis quasi suscipit. Quaerat, architecto. Est ullam, minus
            asperiores doloremque corrupti distinctio facere nesciunt quisquam
            accusantium. Possimus perferendis ad, nostrum consequuntur
            laudantium molestiae asperiores consectetur vel dolorem maiores,
            ullam amet quis vero repellat facere placeat! Velit quia
            reprehenderit incidunt ad possimus harum quaerat fuga quae, quis
            sint ipsum. Dignissimos earum maxime officiis fugiat recusandae eum
            suscipit, quae voluptates. Totam sequi corporis architecto, dolores
            commodi neque! Id, esse? Asperiores officia doloribus tempore
            excepturi iusto nihil quam? Autem quisquam hic possimus dolores sit
            aut, aliquam doloribus aspernatur dignissimos iusto ipsa at
            voluptatibus nesciunt dolorem deleniti repudiandae minima.
            Doloremque nam repellat ex necessitatibus asperiores cum itaque
            maiores assumenda repudiandae cumque quasi facere quo sint amet at
            iure repellendus aut natus laboriosam deserunt error, maxime qui.
            Odio, exercitationem architecto? Voluptas placeat incidunt officiis
            dolorem at. Vitae commodi consectetur officia, laudantium aliquid
            facere dolor? Est nemo corporis ab? Autem eveniet vero ab quis
            aperiam. Saepe dolorum natus quae facere laudantium! Beatae
            repellendus natus in ipsum dignissimos facilis inventore eligendi
            labore, necessitatibus rem suscipit amet commodi enim quae illum
            impedit sapiente eius eveniet iste consequatur perspiciatis? Numquam
            adipisci non sapiente necessitatibus. Ad dolore veniam sit, quam
            illum exercitationem. Nisi voluptatum sunt consectetur veniam
            provident velit modi saepe dolores aut mollitia, ab minima quia
            iure, maiores expedita sequi et a perferendis dolorem?
          </div>
        </div>
      </div>
    </>
  );
}
