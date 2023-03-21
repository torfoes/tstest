import Draggable from 'react-draggable';
import * as Icons from '@mui/icons-material';
import { Box } from '@mui/material';
import { DraggableEvent, DraggableData } from 'react-draggable';
import { useState } from 'react';

import Agriculture from '@mui/icons-material/Agriculture';

function getRandomPosition(maxWidth: number, maxHeight: number) {
    const x = Math.floor(Math.random() * (maxWidth - 48));
    const y = Math.floor(Math.random() * (maxHeight - 48));
    return { x, y };
}

export default function DraggableIcon() {
    const [position, setPosition] = useState(
        getRandomPosition(window.innerWidth, window.innerHeight - 64)
    );

    const handleStop = (e: DraggableEvent, data: DraggableData) => {
        const { x, y } = data;
        if (x < 0 || y < 0 || x > window.innerWidth - 48 || y > window.innerHeight - 112) {
            setPosition(getRandomPosition(window.innerWidth, window.innerHeight - 64));
        }
    };

    return (
        <Draggable
            bounds="parent"
            defaultPosition={position}
            onStop={handleStop}
        >
            <Box
                sx={{
                    width: 48,
                    height: 48,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'move',
                    position: 'absolute',
                }}
            >
                <Agriculture style={{ fontSize: 48 }} />
            </Box>
        </Draggable>
    );
}