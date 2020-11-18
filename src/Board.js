import React,{Component} from 'react'
import Square from './Square'


const CalculateWinner=squares=>{
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]


    ]

    for(let i=0;i<lines.length;i++){
        const [a,b,c]=lines[i]
        if(squares[a]&&squares[b]===squares[a]&&squares[b]===squares[c]){
        return squares[a]}
    }
 return ''
}
class Board extends Component{
    state={
        squares:['','','','','','','','',''],
        xIsnext:true
    }

    on=(number)=>()=>{
        if(CalculateWinner(this.state.squares)||this.state.squares[number]){
            return
        }
        const newSquires=[...this.state.squares]
        newSquires[number]=this.state.xIsnext ? 'X': 'O'
        this.setState({
            squares: newSquires,
            xIsnext:!this.state.xIsnext
        })
    }
    Reset=()=>{
        this.setState({
            squares:['','','','','','','','',''],
            xIsnext:true}
        )
    }
    render(){
        const {squares}=this.state
        const  winner=CalculateWinner(this.state.squares)
        let status
        if(winner){
            status=`Winner is :${winner}`
        }else{
            status=`Next Step :${this.state.xIsnext ? 'X':'O' }`
        }

        return( <div className='Board'>
            <h1>{status}</h1>
            <div className='Row'>
            <Square value ={squares[0]} on={this.on(0)}/>
            <Square value={squares[1]} on={this.on(1)}/>
            <Square value={squares[2]} on={this.on(2)}/>

            </div>
            <div className='Row'>
            <Square value ={squares[3]} on={this.on(3)}/>
            <Square value={squares[4]} on={this.on(4)}/>
            <Square value={squares[5]} on={this.on(5)}/>

            </div>
            <div className='Row'>
            <Square value ={squares[6]} on={this.on(6)}/>
            <Square value={squares[7]} on={this.on(7)}/>
            <Square value={squares[8]} on={this.on(8)}/>

            </div>
            <button onClick={this.Reset} className='Reset'>Reset</button>
        </div>)
    }
}
export default Board