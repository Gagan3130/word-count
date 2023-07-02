import React from "react";
import style from './index.module.scss'

const Definitions = (props: any) => {
    const { meanings, word, category }=props
  return (
    <div className={style.meanings}>
      {/* audio---------------------------- */}
      {meanings?.[0] && word && category === "en" && (
        <>
        {console.log(meanings[0].phonetics[0].audio)}
        <audio
        //   style={{ backgroundColor: "#fff", borderRadius: 10 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
        </>
      )}
      {/* audio---------------------------- */}

      {word === "" ? (
        <span className={style.subTitle}>Start by typing a word in search</span>
      ) : (
        Array.isArray(meanings) ? meanings?.map((mean: any) =>
          mean?.meanings?.map((item: any) =>
            item?.definitions?.map((def: any,index: number) => (
              <div
                className={style.singleMean}
                key={index}
              >
                <b>{def?.definition}</b>
                <hr />
                {def?.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def?.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def?.synonyms?.map((s:any) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        ):<span className={style.subTitle}>{meanings?.title}</span>
      )}
    </div>
  );
};

export default Definitions;