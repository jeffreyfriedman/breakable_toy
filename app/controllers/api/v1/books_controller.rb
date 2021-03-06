class Api::V1::BooksController < ApiController

  def create
    @destination = Destination.find_by(id: params[:destination][:id])
    @book = existing_book
    if !@book.empty?
      UserBook.create(user: current_user, book: @book, note: "")
    else
      @book = Book.new(book_params)
      if @book.save
        UserBook.create(user: current_user, book: @book, note: "")
        BookDestination.create(book: @book, destination: @destination, note: "")
        render json: { book: @book }, status: :created
      else
        render json: { errors: @book.errors }, status: :unprocessable_entity
      end
    end
  end

  def destroy
    @user_book = UserBook.find_by(user: current_user, book: params[:id])
    @user_book.destroy
  end

  private
  def book_params
    params.require(:book).permit(:title, :authors, :description, :isbn, :url, :image)
  end

  def existing_book
    Book.search(params[:book])
  end
end
