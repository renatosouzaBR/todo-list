import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";

import { CheckBox } from "./components/CheckBox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Logo } from "./Logo";

export function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900">
      <header className="flex flex-col items-center">
        <Logo className="mb-4" />
        <Heading size="lg">Ignite Lab</Heading>
        <Text className="text-gray-300">Faça seu login e comece a usar!</Text>
      </header>

      <form className="w-full max-w-xs mt-10 flex flex-col gap-4">
        <label htmlFor="email" className="flex flex-col gap-2">
          <Text className="text-gray-100 font-medium">Informe seu email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input placeholder="Digite seu email" type="email" />
          </TextInput.Root>
        </label>

        <label htmlFor="email" className="flex flex-col gap-2">
          <Text className="text-gray-100 font-medium">Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input placeholder="*********" type="password" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex gap-3 items-center mb-4">
          <CheckBox id="remember" />
          <Text size="sm">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit">ENTRAR</Button>
      </form>

      <footer className="flex flex-col gap-4 items-center mt-8">
        <Text className="text-gray-300 underline hover:text-gray-100 hover:cursor-pointer">
          <a href="">Esqueceu sua senha?</a>
        </Text>
        <Text className="text-gray-300 underline hover:text-gray-100 hover:cursor-pointer">
          <a href="">Não possuí conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  );
}
