import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всі'
                },
                {
                    key: 'fruit',
                    name: 'Фрукти'
                },
                {
                    key: 'vegetable',
                    name: 'Овочі'
                },
                {
                    key: 'meat',
                    name: 'М`ясо та м`ясопродукти'
                },
                {
                    key: 'fish',
                    name: 'Риба та морепродукти'
                },
                {
                    key: 'milk',
                    name: 'Молочні продукти'
                },
                {
                    key: 'crops',
                    name: 'Зернові продукти'
                },
                {
                    key: 'drinks',
                    name: 'Напої'
                },
                {
                    key: 'sweets',
                    name: 'Десерти та солодощі'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
            {this.state.categories.map(el => (
                <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
            ))}
      </div>
    )
  }
}

export default Categories