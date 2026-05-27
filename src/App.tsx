import { Application, extend } from "@pixi/react";
import { Container, Graphics, Sprite } from "pixi.js";

extend({
  Container,
  Graphics,
  Sprite,
});

function App() {
  return (
    <Application
      width={800}
      height={600}
      resizeTo={window}
      backgroundColor={0x1099bb}
    >
      <pixiContainer>
        <pixiGraphics
          draw={(g) => {
            g.rect(100, 100, 100, 100);
            g.fill({ color: 0xff0000 });
          }}
        />
      </pixiContainer>
    </Application>
  );
}

export default App;
