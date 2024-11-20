class ListNode {
    constructor(value = null) {
        this.next = null;
        this.value = value;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.elements = 0
    }

    /** 
     * Inserts a new value (node) in the LinkedList
     * @params value:Number. Value to be inserted in the LinkedList
     * @returns boolean. If value is correctly inserted returns true, otherwise false.
     */
    insert(value = null) {
        if (value === null) {
            return false;
        }
        const nuevoNodo = new ListNode(value);
        if (this.head === null) {
            //si no hay head asignamos como principio y final el nuevo nodo.
            this.head = nuevoNodo;
            this.tail = nuevoNodo;
        } else {
            // en caso contrario hacemos que el nodo al que apunta el anterior sea al nuevo nodo, ahora el tail es el nuevo nodo. Ahora es personal.
            this.tail.next = nuevoNodo;
            this.tail = nuevoNodo;
        }
        this.elements++;
        return true;
    }

    /** 
     * Deletes the node at position passed by paramenter from the LinkedList
     * @params pos:Number. Position of the LinkedList to delete. Starts from 0.
     * @returns boolean. If node is deleted returns true, otherwise false.
     */
    deleteByPosition(pos = null) {
        //imagina que una linkedlist es un tren. Head es el ferrocarril y el resto vagones.
        //El último vagón es el tail, y su enganche es null, porque no hay nada después.
        //Los tail del resto de nodos tienen que tener el sigueinte nodo.

        if (pos === null || pos < 0 || pos >= this.elements) {
            return false;
        }
        if (pos === 0) {
            this.head = this.head.next;

            if (this.elements === 1) {
                this.tail = null;
            }
        } else {
            let nodoActual = this.head; //empezamos por la cabeza
            let anterior = null; //empezamos a cero

            for (let index = 0; index < pos; index++) {
                anterior = nodoActual; //como hemos avanzado una posición guardamos el valor anterir
                nodoActual = anterior.next; //asignamos como nodo actual el siguiente nodo.
            }
            anterior.next = nodoActual.next; //vamos a borrar el nodo actual, así que que el nodo anterior ahora apounta al nodo siguiente del valor actual. (0->1->2) → (0->2)
            if (nodoActual === this.tail) {
                this.tail = anterior; //en el caso de que sea el último elemento lo que hacemos es hacer que el último elemento sea el final.
            }
        }
        this.elements--;
        return true;
    }

    /** 
     * Deletes the first node with value passed by paramenter from the LinkedList
     * @params value:Number. Value of the first node encountered to delete from the LinkedList.
     * @returns boolean. If a node is deleted returns true, otherwise false.
     */
    deleteByValue(value = null) {
        if (value === null || this.head === null) {
            return false;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            if (this.elements === 1) {
                this.tail = null;
            }
            this.elements--;
            return true;
        } else {
            let nodoActual = this.head;
            
            //empezamos por la cabeza
            let nodoAnterior = null;
            while (nodoActual && nodoActual.value !== value) {

                //quiero ir recorriendo los elementos hasta que o sea null o el valor coincida
                nodoAnterior = nodoActual;
                nodoActual = nodoAnterior.next;
            }
            if (nodoActual) {
                nodoAnterior.next = nodoActual.next;
                if (nodoActual === this.tail) {
                    this.tail = nodoAnterior;
                }
                this.elements--;
                return true;
            }
            return false;
        }
    }

    /** 
     * Searches the value by position passed as paramenter in the LinkedList.
     * @params pos:Number. Position to extract value from the LinkedList.
     * @returns Number. If the position is between limits returns the value associated with the node in such position, otherwise returns false
     */
    searchByPosition(pos = null) {
        if (pos === null || pos < 0 || pos >= this.elements || this.head === null) {
            return false;
        }
        let nodoActual = this.head;
        for (let i = 0; i < pos; i++) {
            nodoActual = nodoActual.next;
        }
        return nodoActual.value;
    }

    /** 
     * Searches a node with value passed as paramenter in the LinkedList.
     * @params value:Number. Value to search in the LinkedList.
     * @returns boolean. If a node contains the value returns true, otherwise false.
     */
    searchByValue(value = null) {
        if (value === null || this.head === null) {
            return false;
        }
//empezamos por la cabeza. Mientras el nodo actual sea diferente del valor y a null se recorre, cuando pasa algo devolverá el valor del nodo actual;
        let nodoActual = this.head;
        while (nodoActual.value !== value && nodoActual !== null) {
            nodoActual = nodoActual.next;
        }
        return nodoActual.value;
    }

    /** 
     * Returns an Array representing the LinkedList. 
     * It does not modify the original LinkedList
     * @params
     * @returns Array: Array containing all values of the LinkedList. 
     */
    toArray() {
        let el = this.head
        let array = []
        while (el != null) {
            array.push(el.value)
            el = el.next
        }
        return array
    }

    /** 
     * Returns a LinkedList with reverse values.
     * It does not modify the original LinkedList
     * @params
     * @returns LinkedList: Reversed linked list
     */
    reverseLinkedList() {
        const reverseLinkedList=new LinkedList();

        //empezamos por la cabeza.
        let nodoActual=this.head;

        while(nodoActual){ //mientras exista
            const nuevoNodo=new ListNode(nodoActual.value); //creamos un nuevo nodo con el valor del nodo actual
            if(reverseLinkedList.head===null){ //si no existe la cabeza asignamos la cabeza y el final como el nuevo nodo.
                reverseLinkedList.head=nuevoNodo;
                reverseLinkedList.tail=nuevoNodo;
            }else{//si no existe hago que el nuevo nodo siguiente sea la cabeza, asíq ue guardo el valor siguiente de la cabeza y le asigno un nuevo valor.
                nuevoNodo.next=reverseLinkedList.head;
                reverseLinkedList.head=nuevoNodo;
            }
            nodoActual=nodoActual.next;
        }
        return reverseLinkedList;
    }

    /** 
     * Reverses the LinkedList values.
     * It does modify the original LinkedList.
     * @params
     * @returns Void.
     */
    reverse() {
        //es el 21/11 y ya no sé que hace esto XD
        //tuve que ver un vídeo para entender esto y no estoy muy seguro...


        if(this.head===null||this.head.next===null){
            return false;
        }

        let nodoActual=this.head; //partimos de la cabeza
        this.tail=this.head; //hago que el final sea la cabeza
        let nodoAnterior=null //porque no existe nada antes que la cabeza, puede ser que el pelo
        while(nodoActual){ //mientras el nodo actual no sea null se van recorriendo.
            let nodoSiguiente=nodoActual.next; //hago que el nodo siguiente sea el sigueinte nodo actual
            nodoActual.next=nodoAnterior; //asigno al nodo actual el nodo anterior, ya que el final del tail es nulo
            nodoAnterior=nodoActual; //el nodo anterior ahora es el nodo actual
            nodoActual=nodoSiguiente; //ahora el nodo actual es el siguiente, porque debe ir recorriendo.
        }

    // Para visualizarlo. Al final de la inversión, el nodoAnterior será el último nodo (nuevo head)
    this.head=nodoAnterior;
    }
}

module.exports = LinkedList;



