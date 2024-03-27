import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Search, PlusCircle, Edit, Trash2 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogFooter, DialogHeader } from "./components/ui/dialog";
import { Label } from "@radix-ui/react-label";


export function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Produtos</h1>

      <div className="flex itens-center justify-between">
        <form className="flex itens-center gap-2">
          <Input name="id" placeholder="ID do pedido" />
          <Input name="nome" placeholder="Nome do produto" />
          <Button type="submit" variant={"link"}>
            <Search className="w-4 h-4 mr-2"/>
            Filtrar resultados
            </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2"/>
              Novo Produto
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Produto</DialogTitle>
              <DialogDescription>Criar um novo produto no sistema</DialogDescription>
            </DialogHeader>

            <form className="space-y-6">
              <div className="grid grid-cols-4 itens-center text-right gap-3">
                <Label htmlFor="name">Produto</Label>
                <Input className="col-span-3" id="name"/>
              </div>

              <div className="grid grid-cols-4 itens-center text-right gap-3">
                <Label htmlFor="price">Preço</Label>
                <Input className="col-span-3" id="price"/>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant={"outline"}>Cancelar</Button>
                </DialogClose>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>230976</TableCell>
                  <TableCell>Produto {i}</TableCell>
                  <TableCell>R$ 125,00</TableCell>
                  <TableCell>
                    <Button variant={"link"}>
                      <Edit className="w-4 h-4 mr-2">Editar</Edit>
                    </Button>
                    <Button variant={"link"}>
                      <Trash2 className="w-4 h-4 mr-2">Excluir</Trash2>
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}