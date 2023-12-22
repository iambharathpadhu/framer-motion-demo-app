import { motion, useScroll, useSpring } from "framer-motion";

export function Blog() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          width: "100vw",
          height: "20px",
          background: "red",
          bottom: 0,
          left: 0,
          position: "fixed",
        }}
      />
      <motion.article
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 2.0, delay: 1.0 } }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2>Lionel Messi</h2>
        <img
          src="src/assets/messi.jpeg"
          alt="messi"
          style={{ width: "80vw" }}
        />
        <p>
          Lionel Andrés Messi[note 1] (Spanish pronunciation: [ljoˈnel anˈdɾes
          ˈmesi] ⓘ; born 24 June 1987), also known as Leo Messi, is an Argentine
          professional footballer who plays as a forward for and captains both
          Major League Soccer club Inter Miami and the Argentina national team.
          Widely regarded as one of the greatest players of all time, Messi has
          won a record eight Ballon d'Or awards[note 2] and a record six
          European Golden Shoes, and in 2020 he was named to the Ballon d'Or
          Dream Team. Until leaving the club in 2021, he had spent his entire
          professional career with Barcelona, where he won a club-record 34
          trophies, including ten La Liga titles, seven Copa del Rey titles and
          the UEFA Champions League four times.[note 3] With his country, he won
          the 2021 Copa América and the 2022 FIFA World Cup. A prolific
          goalscorer and creative playmaker, Messi holds the records for most
          goals in La Liga (474), most hat-tricks in La Liga (36) and the UEFA
          Champions League (eight), and most assists in La Liga (192) and the
          Copa América (17). He also has the most international goals by a South
          American male (106). Messi has scored over 800 senior career goals for
          club and country, and has the most goals by a player for a single club
          (672).
        </p>
        <p>
          Messi relocated to Spain from Argentina aged 13 to join Barcelona, for
          whom he made his competitive debut aged 17 in October 2004. He
          established himself as an integral player for the club within the next
          three years, and in his first uninterrupted season in 2008–09 he
          helped Barcelona achieve the first treble in Spanish football; that
          year, aged 22, Messi won his first Ballon d'Or. Three successful
          seasons followed, with Messi winning four consecutive Ballons d'Or,
          making him the first player to win the award four times. During the
          2011–12 season, he set the La Liga and European records for most goals
          scored in a single season, while establishing himself as Barcelona's
          all-time top scorer. The following two seasons, Messi finished second
          for the Ballon d'Or behind Cristiano Ronaldo (his perceived career
          rival), before regaining his best form during the 2014–15 campaign,
          becoming the all-time top scorer in La Liga and leading Barcelona to a
          historic second treble, after which he was awarded a fifth Ballon d'Or
          in 2015. Messi assumed captaincy of Barcelona in 2018, and won a
          record sixth Ballon d'Or in 2019. Out of contract, he signed for
          French club Paris Saint-Germain in August 2021, spending two seasons
          at the club and winning Ligue 1 twice. Messi joined American club
          Inter Miami in July 2023, winning the Leagues Cup in August of that
          year.
        </p>
        <p>
          An Argentine international, Messi is the country's all-time leading
          goalscorer and also holds the national record for appearances. At
          youth level, he won the 2005 FIFA World Youth Championship, finishing
          the tournament with both the Golden Ball and Golden Shoe, and an
          Olympic gold medal at the 2008 Summer Olympics. His style of play as a
          diminutive, left-footed dribbler drew comparisons with his compatriot
          Diego Maradona, who described Messi as his successor. After his senior
          debut in August 2005, Messi became the youngest Argentine to play and
          score in a FIFA World Cup (2006), and reached the final of the 2007
          Copa América, where he was named young player of the tournament. As
          the squad's captain from August 2011, he led Argentina to three
          consecutive finals: the 2014 FIFA World Cup, for which he won the
          Golden Ball, the 2015 Copa América, winning the Golden Ball, and the
          2016 Copa América. After announcing his international retirement in
          2016, he reversed his decision and led his country to qualification
          for the 2018 FIFA World Cup, a third-place finish at the 2019 Copa
          América, and victory in the 2021 Copa América, while winning the
          Golden Ball and Golden Boot for the latter. That same year, Messi
          received a seventh Ballon d'Or. In 2022, he led Argentina to win the
          2022 FIFA World Cup, where he won a record second Golden Ball, scored
          seven goals including two in the final, and broke the record for most
          games played at the World Cup (26), later receiving his
          record-extending eighth Ballon d'Or in 2023.
        </p>
        <p>
          Messi has endorsed sportswear company Adidas since 2006. According to
          France Football, he was the world's highest-paid footballer for five
          years out of six between 2009 and 2014, and was ranked the world's
          highest-paid athlete by Forbes in 2019 and 2022. Messi was among
          Time's 100 most influential people in the world in 2011, 2012 and
          2023. In 2020 and 2023, he was named the Laureus World Sportsman of
          the Year, with Messi being the first team-sport athlete to win the
          award. In 2020, Messi became the second footballer and second
          team-sport athlete to surpass $1 billion in career earnings.
        </p>
        <p>
          2003–2005: rise to the first team "It seemed as if he had been playing
          with us all his life." – Barcelona's then assistant coach Henk ten
          Cate on Messi's first-team debut.[30] During the 2003–04 season, his
          fourth with Barcelona, Messi rapidly progressed through the club's
          ranks, debuting for four youth teams in a single campaign.[31] After
          being named player of the tournament in four international pre-season
          competitions with the Juveniles B, he played only one official match
          with the team before being promoted to the Juveniles A, where he
          scored 18 goals in 11 league games.[32][33] Messi was then one of
          several youth players called up to strengthen a depleted first team
          during the international break. French winger Ludovic Giuly explained
          how Messi caught the eye in a training session with Frank Rijkaard's
          first team: "He destroyed us all... They were kicking him all over the
          place to avoid being ridiculed by this kid, he just got up and kept on
          playing. He would dribble past four players and score a goal. Even the
          team's starting centre-backs were nervous. He was an alien."[34] At 16
          years, four months, and 23 days old, Messi made his first team debut
          when he came on in the 75th minute during a friendly against José
          Mourinho's Porto on 16 November 2003.[22][35] His performance,
          creating two chances and a shot on goal, impressed the technical
          staff, and he subsequently began training daily with the club's
          reserve side, Barcelona B, as well as weekly with the first team.[36]
          After his first training session with the senior squad, Barça's new
          star player, Ronaldinho, told his teammates that he believed the
          16-year-old would become an even better player than himself.[37]
          Ronaldinho soon befriended Messi, whom he called "little brother",
          which greatly eased his transition into the first team.[38][39]
        </p>
        <p>
          2003–2005: rise to the first team "It seemed as if he had been playing
          with us all his life." – Barcelona's then assistant coach Henk ten
          Cate on Messi's first-team debut.[30] During the 2003–04 season, his
          fourth with Barcelona, Messi rapidly progressed through the club's
          ranks, debuting for four youth teams in a single campaign.[31] After
          being named player of the tournament in four international pre-season
          competitions with the Juveniles B, he played only one official match
          with the team before being promoted to the Juveniles A, where he
          scored 18 goals in 11 league games.[32][33] Messi was then one of
          several youth players called up to strengthen a depleted first team
          during the international break. French winger Ludovic Giuly explained
          how Messi caught the eye in a training session with Frank Rijkaard's
          first team: "He destroyed us all... They were kicking him all over the
          place to avoid being ridiculed by this kid, he just got up and kept on
          playing. He would dribble past four players and score a goal. Even the
          team's starting centre-backs were nervous. He was an alien."[34] At 16
          years, four months, and 23 days old, Messi made his first team debut
          when he came on in the 75th minute during a friendly against José
          Mourinho's Porto on 16 November 2003.[22][35] His performance,
          creating two chances and a shot on goal, impressed the technical
          staff, and he subsequently began training daily with the club's
          reserve side, Barcelona B, as well as weekly with the first team.[36]
          After his first training session with the senior squad, Barça's new
          star player, Ronaldinho, told his teammates that he believed the
          16-year-old would become an even better player than himself.[37]
          Ronaldinho soon befriended Messi, whom he called "little brother",
          which greatly eased his transition into the first team.[38][39]
        </p>
      </motion.article>
    </>
  );
}
