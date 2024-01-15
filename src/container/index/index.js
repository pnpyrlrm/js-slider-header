class Slider {
  static #content = null
  static #left = null
  static #right = null

  static #count = 1
  static #max = null

  static init = () => {
    this.#content = document.querySelector(
      'slider__content',
    )
    this.#left = document.querySelector(
      'slider__button--left',
    )
    this.#right = document.querySelector(
      'slider__button--right',
    )
    this.#max = this.#content.childElementCount
    this.#left.onclick = () => this.#slide('left')
    this.#right.onclick = () => this.#slide('right')
  }

  static #slide = (side) => {
    const offsetWidth = this.#content.offsetWidth
    const scrollLeft = this.#content.scrollLeft
    const scrollWidht = this.#content.scrollWidht

    let scroll = 0

    if (side === 'left') {
      scroll = -100
    }
    if (side === 'right') {
      scroll = 100
    }

    this.#content.scrollTo({
      top: 0,
      left: scroll,
      behavior: 'smooth',
    })
  }
}

Slider.init()
