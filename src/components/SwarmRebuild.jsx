import { useEffect, useCallback } from 'react';
import {
  startSwarmRebuild,
  stopSwarmRebuild,
  isSwarmRunning,
} from '../swarm/swarmRebuild';

export default function SwarmRebuild({ targetId = 'swarm-scope', autoStart = true }) {
  const handleStart = useCallback(() => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    // Scroll to top for the natural rebuild intro experience
    window.scrollTo({ top: 0, behavior: 'instant' });

    startSwarmRebuild({
      targetElement,
      targetSelector: `#${targetId}`,
    });
  }, [targetId]);

  const handleTrigger = useCallback(() => {
    if (isSwarmRunning()) {
      stopSwarmRebuild(true);
    } else {
      handleStart();
    }
  }, [handleStart]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Shortcut Alt + Shift + S for development/replay testing
      if (e.altKey && e.shiftKey && (e.key === 'S' || e.key === 's')) {
        e.preventDefault();
        handleTrigger();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Auto-start rebuild on initial visit after layout settles
    let timer = null;
    if (autoStart) {
      timer = setTimeout(() => {
        handleStart();
      }, 500);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (timer) clearTimeout(timer);
      stopSwarmRebuild(false);
    };
  }, [autoStart, handleStart, handleTrigger]);

  // Clean UI without any floating buttons or panels
  return null;
}
