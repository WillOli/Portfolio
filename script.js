   document.querySelector(".hamburguer").addEventListener("click", ()=>{
   document.querySelector(".container").classList.toggle("show-menu")});

   document.querySelector("#qtde").addEventListener("change", atualizarPreco);
   document.querySelector("#js").addEventListener("change", atualizarPreco);
   document.querySelector("#layout-sim").addEventListener("change", atualizarPreco);
   document.querySelector("#layout-nao").addEventListener("change", atualizarPreco);
   document.querySelector("#prezo").addEventListener("change", function (){
      document.querySelector("label[for=prazo]").innerHTML = prazo
      atualizarPreco();

   }

   function atualizarPreco(){
      const qtde = document.querySelector("#qtde").Value;
      const temJS = document.querySelector("#js").Checked;
      const incluiLayout = document.querySelector("#layout-sim").Checked;
      const prazo = document.querySelector("#prazo").Value;



      let preco = qtde * 100;
      if (temJS) preco *= 1.1;
      if (incluiLayout) {
         preco = preco + 500;
      }
   document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}