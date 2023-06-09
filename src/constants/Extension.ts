import type { NyxiCommands } from 'nyxi-for-vscode'

export const EXTENSION_KEY = 'nyxi'

export const EXTENSION_NAME = 'vscode-nyxi'

export const COMMAND_NAMES: Record<NyxiCommands, string> = {
   nyxi: 'install',
   nyxr: 'run',
   nyxlx: 'execute',
   nyxu: 'upgrade',
   nyxun: 'uninstall',
   nyxci: 'clean-install',
   nyxa: 'agent',
}

export function getCommandName(command: string) {
   return `${EXTENSION_KEY}.${command}`
}
