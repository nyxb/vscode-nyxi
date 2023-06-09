import type { NyxiCommands } from 'nyxi-for-vscode'
import type { RunOptions } from '../core'

export const meta: Record<NyxiCommands, RunOptions | undefined> = {
   nyxi: {
      showInputBox: true,
   },
   nyxr: {
      showInputBox: true,
   },
   nyxlx: {
      showInputBox: true,
   },
   nyxu: {
      showInputBox: true,
   },
   nyxun: {
      showInputBox: true,
   },
   nyxci: {
      showInputBox: true,
   },
   nyxa: {
      showInputBox: true,
   },
}
