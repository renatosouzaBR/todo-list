import { Coffee, MapPin, Package, ShoppingCart, Timer } from 'phosphor-react'

import logoImage from '@/assets/logo.svg'
import coffeeBannerImage from '@/assets/coffee-banner.svg'

import { HomeContainer, WelcomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <header>
        <img src={logoImage} alt="" />

        <div>
          <span>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </span>

          <button>
            <ShoppingCart size={22} weight="fill" />
            <span>3</span>
          </button>
        </div>
      </header>

      <WelcomeContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>

          <div>
            <div>
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>

            <div>
              <div>
                <Package size={16} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>

        <img src={coffeeBannerImage} alt="" />
      </WelcomeContainer>
    </HomeContainer>
  )
}
