export default function AnswerOptions({mistakes, setMistakes, setStatus, zaps, setZaps}) {
  return (
    <div className="answers-wrapper">
      <button className="black-border" onClick={() => setStatus('answered')}>Aprendi Agora</button>
      
      <button className="red-border" onClick={() => 
        {
          setStatus('answered');
          setMistakes(mistakes+1);
        }
      }>Não lembrei</button>
      
      <button className="green-border" onClick={() => setStatus('answered')}>Lembrei com esforço</button>
      
      <button className="yellow-border" onClick={() => 
        {
          setStatus('answered');
          setZaps(zaps+1);
        }
      }>Zap!</button>
    </div>
  )
}

