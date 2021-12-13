export default function AnswerOptions({mistakes, setMistakes, setStatus, zaps, setZaps, setColor}) {
  return (
    <div className="answers-wrapper">
      <button className="black-border" onClick={() =>
        {
         setStatus('answered');
         setColor('black-border');
        }
      }>Aprendi Agora</button>

      <button className="red-border" onClick={() => 
        {
          setColor('red-border');
          setStatus('answered');
          setMistakes(mistakes+1);
        }
      }>Não lembrei</button>
      
      <button className="green-border" onClick={() => 
        {
          setColor('green-border');
          setStatus('answered')
        }
      }>Lembrei com esforço</button>
      
      <button className="yellow-border" onClick={() => 
        {
          setColor('yellow-border');
          setStatus('answered');
          setZaps(zaps+1);
        }
      }>Zap!</button>
    </div>
  )
}

