//@flow
import NProgress from 'nprogress'

export default {
  start: () => {
    NProgress.start()
    const progress: HTMLDivElement = document.getElementById('nprogress')
    const spinner: HTMLDivElement = progress.querySelector('.spinner')

    progress.setAttribute('aria-busy', true)
    spinner.setAttribute('role', 'progressbar')
  },
  done: () => NProgress.done(),
  inc: (value: number) => NProgress.inc(value),
  configure: NProgress.configure,
}
