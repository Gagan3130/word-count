import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import countries from '../../../data/language.json';
import style from './index.module.scss';

const DictionaryHeader = (props: any) => {
  const { category, setCategory, setWord, word, setMeanings } = props;
  const handleText = (str:string) => {
    setWord(str);
  }
  const handleChange = (e:any) => {
    setCategory(e.target.value);
    setWord('');
    setMeanings([]);
  };
 
  return (
    <div className={style.header}>
      <span className={style.title}>{word ? word : "Word Hunt"}</span>
      <div className={style.inputs}>
        <TextField
          className={style.search}
          id="filled-basic"
          value={word}
          label="Search a Word"
          onChange={(e) => handleText(e.target.value)}
        />
        <TextField select label="Language" value={category} onChange={(e) => handleChange(e)} className={style.select}>
          {countries.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};
export default DictionaryHeader;
