import './App.css';
function Local() {
  const nome = localStorage.getItem('nome')

  return (
    <div className='cadastro'>
      {nome}
    </div>
  )
}

export default Local