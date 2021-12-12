export default function AnswerOptions({mistakes, setMistakes, setStatus, zaps, setZaps}) {
  return (
    <>
      <button onClick={() => setStatus('answered')}>Aprendi Agora</button>
      
      <button onClick={() => 
        {
          setStatus('answered');
          setMistakes(mistakes+1);
        }
      }>Não lembrei</button>
      
      <button onClick={() => setStatus('answered')}>Lembrei com esforço</button>
      
      <button onClick={() => 
        {
          setStatus('answered');
          setZaps(zaps+1);
        }
      }>Zap!</button>
    </>
  )
}

