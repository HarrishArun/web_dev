import random

# Constants for the players and empty cells
HUMAN = 'X'
AI = 'O'
EMPTY = ' '

# Define the Tic-Tac-Toe board as a list of 9 cells
board = [EMPTY] * 9

# Function to print the Tic-Tac-Toe board
def print_board(board):
    print(f'{board[0]} | {board[1]} | {board[2]}\n---------')
    print(f'{board[3]} | {board[4]} | {board[5]}\n---------')
    print(f'{board[6]} | {board[7]} | {board[8]}\n')

# Function to check if the board is full
def is_full(board):
    return all(cell != EMPTY for cell in board)

# Function to check if a player has won
def is_winner(board, player):
    winning_combinations = [
        (0, 1, 2), (3, 4, 5), (6, 7, 8),  # Rows
        (0, 3, 6), (1, 4, 7), (2, 5, 8),  # Columns
        (0, 4, 8), (2, 4, 6)              # Diagonals
    ]
    for combo in winning_combinations:
        if all(board[i] == player for i in combo):
            return True
    return False

# Function to evaluate the score of a board state
def evaluate(board):
    if is_winner(board, AI):
        return 1
    elif is_winner(board, HUMAN):
        return -1
    else:
        return 0

# Minimax function with recursion and Alpha-Beta Pruning
def minimax(board, depth, is_maximizing, alpha, beta):
    if is_winner(board, AI):
        return 1
    if is_winner(board, HUMAN):
        return -1
    if is_full(board):
        return 0

    if is_maximizing:
        max_eval = -float('inf')
        for i in range(9):
            if board[i] == EMPTY:
                board[i] = AI
                eval = minimax(board, depth + 1, False, alpha, beta)
                board[i] = EMPTY
                max_eval = max(max_eval, eval)
                alpha = max(alpha, eval)
                if beta <= alpha:
                    break
        return max_eval
    else:
        min_eval = float('inf')
        for i in range(9):
            if board[i] == EMPTY:
                board[i] = HUMAN
                eval = minimax(board, depth + 1, True, alpha, beta)
                board[i] = EMPTY
                min_eval = min(min_eval, eval)
                beta = min(beta, eval)
                if beta <= alpha:
                    break
        return min_eval

# Function to find the best move using Minimax and Alpha-Beta Pruning
def find_best_move(board):
    best_move = -1
    best_eval = -float('inf')
    alpha = -float('inf')
    beta = float('inf')

    for i in range(9):
        if board[i] == EMPTY:
            board[i] = AI
            eval = minimax(board, 0, False, alpha, beta)
            board[i] = EMPTY
            if eval > best_eval:
                best_eval = eval
                best_move = i

    return best_move

# Main game loop
while True:
    print_board(board)
    move = input("Enter your move (0-8): ")

    if board[int(move)] == EMPTY:
        board[int(move)] = HUMAN

        if is_winner(board, HUMAN):
            print_board(board)
            print("You win!")
            break
        elif is_full(board):
            print_board(board)
            print("It's a draw!")
            break

        best_move = find_best_move(board)
        board[best_move] = AI

        if is_winner(board, AI):
            print_board(board)
            print("AI wins!")
            break
        elif is_full(board):
            print_board(board)
            print("It's a draw!")
            break
    else:
        print("Invalid move. Try again.")
