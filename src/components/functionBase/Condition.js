import Sdata from './Sampledata';
import Props from './Props'

// if else condition again start //
const title='white';

const Condition=()=>{
if (title==='dark') {
    return <>
      <Props 
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].link}/>
    </>}
else{
    return <>
      <Props 
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].link}/>
    </>
    }
}
export default Condition;
// if else condition again end //