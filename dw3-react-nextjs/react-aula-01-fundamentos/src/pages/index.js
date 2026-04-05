import Descricao from "@/components/Descricao";
import MeuComponente from "@/components/MeuComponente";
import User from "@/components/User";
import Cat from "@/components/Cat";

export default function Home() {
  return (
    <>
      <h1>Olá, mundo!</h1>
      <p>Bem-vindo ao meu primeiro site em React.</p>
      <MeuComponente/>
      <User/>

      {/* Chamando o componente Descricao e passando dados externos para ele */}
      <Descricao cidade = "Registro" idade = {20} />

      <Cat nome = "Salém" raca = "Bombaim" idade = "2" humano = "Max" />
    </>
  );
}
